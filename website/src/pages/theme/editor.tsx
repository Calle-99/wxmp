import MarkdownEditor, { IMarkdownEditor } from '@uiw/react-markdown-editor';
import { useContext } from 'react';
import { EditorView } from '@codemirror/view';
import { css as cssLang } from '@codemirror/lang-css';
import { Preview } from './Preview';
import { copy } from '../../commands/copy';
import { previousCommand } from '../../commands/css';
import { themeTitle } from '../../commands/title';
import { theme as themeCommand, previeTheme } from '../../commands/theme';
import { Context, themes } from '../../store/context';

export const EditorPage = () => {
  const commands = [themeTitle, themeCommand, previousCommand];
  const toolbarsMode: IMarkdownEditor['toolbarsMode'] = [previeTheme, copy, 'fullscreen', 'preview'];
  const { theme, css, setCss, isLoading } = useContext(Context);
  const value = themes[theme].value;
  const handleChange = (value: string) => setCss(value);
  return (
    <MarkdownEditor
      value={css}
      theme={value}
      readOnly={isLoading}
      toolbars={commands}
      toolbarsMode={toolbarsMode}
      reExtensions={[EditorView.lineWrapping, cssLang()]}
      renderPreview={Preview}
      previewWidth="420px"
      onChange={handleChange}
      visible={true}
      height="calc(100vh - 4.6rem)"
    />
  );
};
