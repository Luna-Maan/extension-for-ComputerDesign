// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "extensionOVT" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extensionOVT.runfile', () => {
		const activeTextEditor = vscode.window.activeTextEditor;
		
		if (activeTextEditor) {
		  const filePath = activeTextEditor.document.fileName;
		  
		  // Replace 'your-compiler-command' with the actual command you want to use.
		  const compilerCommand = 'run.py';
		  
		  const terminal = vscode.window.createTerminal('Run File');

	      vscode.window.showInformationMessage(compilerCommand);

		  terminal.sendText(`${compilerCommand} ${filePath}`);
		  terminal.show();
		} else {
		  vscode.window.showErrorMessage('No active text editor.');
		}
	  });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
