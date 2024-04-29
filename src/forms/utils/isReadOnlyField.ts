type IsReadOnlyField = (arg: {
  type?: string;
  isReadOnly?: boolean | null;
}) => boolean;

const isReadOnlyField: IsReadOnlyField = ({type, isReadOnly}) => {
  if (isReadOnly === true) {
    return true;
  }
  switch (type) {
    case 'actionLink':
    case 'paragraph':
    case 'title':
    case 'separator':
      return true;
    default:
      return false;
  }
};

export default isReadOnlyField;
