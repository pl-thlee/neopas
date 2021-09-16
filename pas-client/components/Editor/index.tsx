import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { editorConfig } from './editorConfig';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { CodemirrorBinding } from 'y-codemirror';
import './editorAddons';
import './remote-caret.css';
import randomColor from 'randomcolor';

const Editor = () => {
  const [doc, setDoc] = useState<CodeMirror.Doc>();
  const [editor, setEditor] = useState<CodeMirror.Editor>();
  if (editor) {
    // setEditor(undefined);
    // editor.refresh();
    editor.setSize('70vw', 'calc(100vh - 4rem)');
  }

  const [code, setCode] = useState('');
  // const codemirrorRef = useRef(doc?.getEditor());

  useEffect(() => {
    if (editor) {
      // Create a Yjs document that holds shared data
      const ydoc = new Y.Doc();

      let provider: WebrtcProvider | null = null;
      try {
        // Syncs the ydoc throught WebRTC connection
        provider = new WebrtcProvider('pas-room', ydoc);

        // Define a shared text type on the document
        const yText = ydoc.getText('codemirror');

        // UndoManager used for stacking the undo and redo operation for yjs
        const yUndoManager = new Y.UndoManager(yText);
        const awareness = provider.awareness;
        const color = randomColor();

        awareness.setLocalStateField('user', {
          name: '이도훈',
          color: color,
        });

        new CodemirrorBinding(yText, editor, awareness, { yUndoManager });
      } catch (err) {
        console.error(err);
      }
      return () => {
        // Releasing the resources used and destroying the document
        if (provider) {
          provider.disconnect();
          ydoc.destroy();
        }
      };
    }
  }, [editor]);

  return (
    <div
      style={{
        display: 'flex',
        flex: '0.7',
        width: '100%',
        background: 'lightgray',
        // marginTop: '0.3rem',
        height: 'calc(100vh - 4rem)',
      }}
    >
      <CodeMirror
        // value={code}
        options={editorConfig}
        editorDidMount={(editor) => {
          setEditor(editor);
        }}
        onChange={(editor, data, Code) => {
          setCode(code);
        }}
        autoScroll
        // ref={(c: any) => setEditorRef(c)}
      />
    </div>
  );
};

export default Editor;
