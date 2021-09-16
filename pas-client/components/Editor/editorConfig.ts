import { default as languageMapper } from '@libs/languageMapper';
import { EditorConfiguration } from 'codemirror';

export const editorConfig: EditorConfiguration = {
  mode: languageMapper('tsx'),
  theme: 'darcula',
  smartIndent: true,
  tabSize: 4,
  indentWithTabs: false,
  lineWrapping: true,
  lineNumbers: true,
  scrollbarStyle: 'null',
  // readOnly: 'nocursor',
  autofocus: true,
  autoCloseTags: true,
  autoCloseBrackets: {
    override: true,
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  showHint: true,
  highlightSelectionMatches: {
    showToken: true,
  },
  styleActiveLine: {
    nonEmpty: true,
  },
  continueComments: true,
  placeholder: 'Source code goes here!',
};
