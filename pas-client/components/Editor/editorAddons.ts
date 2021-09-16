import 'codemirror/lib/codemirror.css';

/**
 * @see https://codemirror.net/demo/theme.html
 */
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/elegant.css';

/**
 * @see https://stackoverflow.com/questions/53469681/how-to-configure-codemirror-for-c-like-language
 * @see https://codemirror.net/mode/
 */
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/php/php';
import 'codemirror/mode/r/r';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/jsx/jsx';

/**
 * @see https://codemirror.net/doc/manual.html#addons
 */
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/sql-hint';

/**
 * @prop {boolean} highlightSelectionMatches.showToken
 */
import 'codemirror/addon/search/match-highlighter';

/**
 * @todo lint
 * @see https://github.com/felixhao28/JSCPP
 */
// import 'codemirror/addon/lint/lint';

/**
 * @prop {boolean} styleActiveLine.nonEmpty
 */
import 'codemirror/addon/selection/active-line';

/**
 * @prop {string | boolean | { key: string; continueLineComment?: boolean | undefined; } | undefined} continueComments
 */
import 'codemirror/addon/comment/continuecomment';

/**
 * @prop {string | Node | undefined} placeholder
 */
import 'codemirror/addon/display/placeholder';
