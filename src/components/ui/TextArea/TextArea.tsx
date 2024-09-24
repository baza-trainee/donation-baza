import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
}

const TextArea = forwardRef(function TextInput(
  { title, errorText, value = '', ...rest }: TextAreaProps,
  _ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className={styles.inputWrapper}>
      <textarea {...rest} id={title} value={value} className={styles.input} />
      {errorText && <span className={styles.errorMessage}>{errorText}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
