const getPaginationData = (data = [], limit, offset) => {
  const contentCount = data.length;
  const currentPageData = data.slice(offset, offset + limit);
  const hasNext = data.length - 1 >= offset + limit;
  const hasPrevious = offset !== 0;
  const totalPages = Math.ceil(data.length / limit);

  return {
    contentCount,
    currentPageData,
    hasNext,
    hasPrevious,
    totalPages,
  };
};

module.exports = { getPaginationData };
