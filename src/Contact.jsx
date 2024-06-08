import React, { useEffect, useState } from 'react'
import fetchData from './utils/fetchData';
import { Container } from '@mui/material';
import BoxText from './common/BoxText';

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

  const content = "お問い合わせは以下のメールアドレスにお願いします。\n" + 
    "代表メールアドレス:" + representativeEmail + "\n" +
    "広報メールアドレス:" + prEmail + "\n";

  return (
    <Container>
      <BoxText title="連絡先" content={content} />
    </Container>
  );
}
