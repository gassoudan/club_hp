import React from 'react'
import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
		<div>
			<Container>
				<Typography variant="h1" gutterBottom>
					ホームページ
				</Typography>
				<Typography variant="h6" gutterBottom>
					ようこそ関西学院大学 室内合奏団のホームページへ
				</Typography>
				<Typography variant="body1" gutterBottom>
					これは本文テキストの例です。通常の段落テキストとして表示されます。
				</Typography>
				<Typography variant="body2" gutterBottom>
					これは小さいサイズの本文テキストの例です。
				</Typography>
    	</Container>

		</div>
  )
}
