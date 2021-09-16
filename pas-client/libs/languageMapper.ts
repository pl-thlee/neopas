/**
 * @see https://codemirror.net/doc/manual.html#config
 * @param {string} ext - 확장자
 * @returns {string} 'text/XXX' - 매핑된 language mode
 */
const setMode = (ext: string | null) => {
  switch (ext) {
    case 'c':
      return 'text/x-csrc';
    case 'cpp':
      return 'text/x-c++src';
    case 'css':
      return 'text/css';
    case 'python':
      return 'text/x-python';
    case 'java':
      return 'text/x-java';
    case 'js':
      return 'text/javascript';
    case 'ts':
      return 'text/typescript';
    case 'jsx':
      return 'text/jsx';
    case 'tsx':
      return 'text/typescript-jsx';
    default:
      return 'null';
  }
};

export default setMode;
