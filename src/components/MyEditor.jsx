import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import '/Users/dustinwalker/Desktop/webprojects/job-board/node_modules/draft-js/dist/Draft.css';
import './draft.css'
import { draftToMarkdown } from 'markdown-draft-js';
import ReactMarkdown from 'react-markdown';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => {
      this.setState({ editorState });
      var currentContent = editorState.getCurrentContent();
      var rawEditorState = convertToRaw(currentContent)
      var markdownString = draftToMarkdown(rawEditorState);
      this.props.updateDetails(markdownString);
    };
  }
  render() {
    const { updateDetails } = this.props;
    console.log(this.state.editorState.getCurrentContent().getPlainText())
    return (
      <div className="editor">
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}
///TODO ADD RICH UTIL TOGGLES

export default MyEditor