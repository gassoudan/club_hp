import React, { useEffect, useState } from 'react'
import fetchData from './utils/fetchData';

export default function Contact() {
  const [representativeEmail, setRepresentativeEmail] = useState('');
  const [prEmail, setPrEmail] = useState('');

  useEffect(() => {
    const setData = async () => {
      const textContent = await fetchData('設定/連絡先.txt');

      const lines = textContent.split('\n');
      lines.forEach(line => {
        const [key, value] = line.split('=');
        if (key === '代表メール') {
          setRepresentativeEmail(value.trim());
        } else if (key === '広報メール') {
          setPrEmail(value.trim());
        }
      });   
    };
    setData();
  }, []);

  return (
    <div>
      <h1>連絡先</h1>
      <p>代表メールアドレス: {representativeEmail}</p>
      <p>広報メールアドレス: {prEmail}</p>
    </div>
  );
}
