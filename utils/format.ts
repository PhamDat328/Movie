const format = {
  convertTitleToSlug: (title: string) => {
    return title
      .toLowerCase()
      .replace(/([-])\s+/g, '') // Loại bỏ khoảng trắng sau dấu "-"
      .replace(/\s+([-])/g, '') // Loại bỏ khoảng trắng trc dấu "-"
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .replace(/[?,:%'"`’‘+()]/g, '')
      .replace(/[/.]/g, '-')
      .trim()
      .split(' ')
      .join('-');
  },
  getIdFromSlug: (slug: string) => {
    return slug?.split('-')?.pop()?.trim();
  },
};
export default format;
