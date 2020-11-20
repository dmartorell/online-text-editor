
DecoupledDocumentEditor
.create( document.querySelector( '#editor' ), {
    
    toolbar: {
        items: [
            'heading',
            '|',
            'fontSize',
            'fontFamily',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'highlight',
            '|',
            'alignment',
            '|',
            'numberedList',
            'bulletedList',
            '|',
            'indent',
            'outdent',
            '|',
            'link',
            'blockQuote',
            'imageUpload',
            'mediaEmbed',
            'CKFinder',
            '|',
            'undo',
            'redo'
        ]
    },
    language: 'es',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    
    
} ).then( editor => {
    const toolbarContainer = document.querySelector( '#toolbar-container' );
    toolbarContainer.appendChild( editor.ui.view.toolbar.element );
    const sendButton = document.querySelector('#btn');
    sendButton.addEventListener('click', ()=> {
        console.log(editor.getData());
    });

} )
.catch( error => {
    console.error( error );
} );