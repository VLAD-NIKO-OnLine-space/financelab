import React from 'react';
import styles from './LoginInput.module.scss'

interface LoginInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    type?: string
}

const LoginInput: React.FC<LoginInputProps> = ({...props}) => {
    return (
        <input
            {...props}
            className={styles.input}
        />
        

        
    );
};

export default LoginInput;