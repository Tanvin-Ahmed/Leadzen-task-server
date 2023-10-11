const { getPaginationData } = require("../utils/pagination");

const url = "https://jsonplaceholder.typicode.com";

const getAllUsers = async (req, res) => {
  try {
    const { limit, offset, search } = req.query;

    const response = await fetch(`${url}/users`);
    const users = await response.json();

    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    // Pagination with search results
    if (search) {
      const searchResult = users.filter((user) => {
        const regex = new RegExp(search, "i"); // 'i' flag makes it case-insensitive
        return regex.test(user.name);
      });

      const { currentPageData, ...dataWithPagination } = getPaginationData(
        searchResult,
        limitNumber,
        offsetNumber
      );

      return res.status(200).json({
        ...dataWithPagination,
        users: currentPageData,
      });
    }

    // Pagination without search
    const { currentPageData, ...dataWithPagination } = getPaginationData(
      users,
      limitNumber,
      offsetNumber
    );

    return res.status(200).json({
      ...dataWithPagination,
      users: currentPageData,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`${url}/users/${id}`);
    const user = await response.json();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { getAllUsers, getSingleUser };
