import Picker from "emoji-picker-react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactNode, useState } from "react";

import './styles/home.scss';

interface EmojiData {
  unified: string,
  names: string,
  emoji: ReactNode,
}

export function App() {
  const [chosenEmoji, setChosenEmoji] = useState<EmojiData>();
  const [isCopied, setIsCopied] = useState(false);

  function handleEmojiClick(event: any, emojiObject: any) {
    setChosenEmoji(emojiObject);
    setIsCopied(false);
  }

  return (
    <div className="main-container">
      <CopyToClipboard
        text={String(chosenEmoji?.emoji) ?? ""}
        onCopy={() => setIsCopied(true)}
      >
        <button className={isCopied ? "copied" : ""}>
          {isCopied ? "Copiado" : "Copiar"}
        </button>
      </CopyToClipboard>

      <Picker onEmojiClick={handleEmojiClick} disableAutoFocus={true} native />

      <textarea cols={30} rows={5}></textarea>
    </div>
  );
}
