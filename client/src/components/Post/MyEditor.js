import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
        this.editor = editor;
    };
    
    this.focusEditor = () => {
        if (this.editor) {
            this.editor.focus();
        }
    };
  }

    componentDidMount() {
        this.focusEditor();
    }

    render() {
        return (
        <div style={styles.editor} onClick={this.focusEditor}>
            <Editor
                ref={this.setEditor}
                editorState={this.state.editorState}
                onChange={this.onChange}
            />
        </div>
        );
    }
}

const styles = {
    editor: {
        width: '1000px',
        border: '1px solid gray',
        minHeight: '8em'
    }
};

export default MyEditor;