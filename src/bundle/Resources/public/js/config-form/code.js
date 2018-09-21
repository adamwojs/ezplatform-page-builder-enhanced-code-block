(function(global, doc) {
    doc.querySelectorAll('.ez-ace-editor').forEach((node) => {
        const textarea = node.parentNode.querySelector('textarea');
        const editor = global.ace.edit(node.id, {
            cursorStyle: 'smooth',
            enableBasicAutocompletion: true,
            mode: 'ace/mode/html',
            theme: 'ace/theme/chrome',
            useWorker: false,
        });

        editor.setValue(textarea.value);
        editor.focus();
        editor.on('change', () => {
            textarea.value = editor.getValue();
        });
    });
}) (window, document);
