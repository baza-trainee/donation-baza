import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, value = '', ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles.inputWrapper}>
      <input {...rest} id={title} value={value} className={styles.input} />
      {errorText && <span className={styles.errorMessage}>{errorText}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
