import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
const TinyEditor = ({ onChange, name, value }) => {
  return (
    <Editor
      apiKey="rzop9bc03jo1w10yha9wa57f4zpfcapnianfwajclyq017b3"
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat="html"
      init={{
        menubar: false,
        height: 300,
        selector: 'textarea',
        plugins: 'link, code',
        toolbar: 'undo redo | h2 h3 h4 p | bold italic link | code', // paragraphgroup // styleselect
        // paragraphgroup: {
        //     icon: 'paragraph',
        //     items: 'h1 h2 h3 h4 p'
        // },
        convert_urls: false,

        // extended_valid_elements: "*[*],iframe[src|frameborder|style|scrolling|class|width|height|name|align]",

        // extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
        extended_valid_elements: "iframe[title|class|type|width|height|src|frameborder|allowFullScreen]",
        // cleanup: false,

        // extended_valid_elements : "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
        // valid_elements : "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",

        invalid_elements: "p[style], span",
          // ---------------------------------
        // relative_urls : true,
        // remove_script_host : true,

        media_alt_source: false,
        media: false,
        media_poster: false,

        document_base_url: 'http://localhost:1337/',
        // document_base_url : 'http://www.example.com/path1/'
        relative_urls : false,
        remove_script_host : false,
          // document_base_url : 'http://www.example.com/path1/'
        // ---------------------------------
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;
