import React from 'react'
import { Container, Box, Typography } from '@mui/material'

export default function Recruit() {
  // ----{style}----

  // Q&A
  const QA_style = {
    paddingTop: 2,
    paddingBottom: 2,
    marginBottom: 2,
  };

  const QA_index = {
    fontWeight: 'bold',
    marginBottom: 1,
  };

  // ----{Body}----

  return (
    <Container>
      <Typography variant='h1' gutterBottom>
        団員募集
      </Typography>
      {/* ---- 団体紹介 ---- */}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}
      >
        <Typography variant="h6" gutterBottom>
          ようこそ室内合奏団へ！
        </Typography>
        <Typography variant="body1" gutterBottom>
          音楽や楽器が好きな方大学で音楽をやってみようと思っている方アンサンブルやオーケストラに興味がある方私たちと一緒に新しいことを始めてみませんか？
        </Typography>
      </Box>

      {/* ---- 募集パート ---- */}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Typography variant="h6" gutterBottom>
          募集パート
        </Typography>
        <Typography variant="body1" gutterBottom>
          {/* --- ここに募集パートリストを作る --- */}
        </Typography>
      </Box>

      {/* ---- 活動日・場所 ---- */}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Box>
          <Typography variant="h6" gutterBottom>
            活動日
          </Typography>
          <Typography variant="body1" gutterBottom>
            毎週2回 17:00～20:00(授業期間中)
          </Typography>
          <Typography variant="body1" gutterBottom>
            毎週2回程度 10:00～16:00(長期休暇中)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            場所
          </Typography>
          <Typography variant="body1" gutterBottom>
            クラブハウス棟2F 205号室・ミーティングルーム
          </Typography>
          <Typography variant="body1" gutterBottom>
            クラブハウスは↓の丸印の場所です！
            6号館から、正門と逆方向に進むと正面に階段があるので、 そこを降り、右手に見える建物です。 気軽に見学・楽器体験に来てください！
          </Typography>
        </Box>
      </Box>

      {/* ---- Q&A ---- */}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Typography variant="h6" gutterBottom>
          Q&A
        </Typography>

        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q どんなサークル？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 神戸三田キャンパスで活動する管弦楽サークルです。 
            学祭や依頼演奏会ではアンサンブル（少人数での演奏）、 
            定期演奏会では、市民の方々やOB・OGとオーケストラとして演奏しています。 
            音楽を楽しむことをモットーに活動しております。
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q いつ練習していますか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 毎週2回、17:00~20:00に、クラブハウス棟で活動しています！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 見学に行きたいです！
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 問い合わせから連絡もらえれば、 団員が案内します！アポなしでもOKです！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 初心者です！大丈夫でしょうか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 大歓迎です！優しい先輩が丁寧に教えます！
            現在所属している団員の多くが 楽器未経験の状態からはじめています。
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 楽器を持っていないのですが...
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 団持ちの楽器があり、貸出できるので、 自分の楽器がなくても大丈夫です。
            ただ、楽器によっては団持ちのものがなかったり数が足りないことがあるので、 一度団員に聞いてみてください！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 団費はいくらですか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 月1500円です。
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 5限に授業があっても大丈夫？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 5限が終わってからの練習もOKです！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 学業とサークルの両立はできますか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 演奏会前は異なりますが、基本週2日練習に参加する形です。
            試験前の活動はお休みとなるので、試験勉強に集中できます。 また、ほとんどの団員がアルバイトとサークルを両立しています^^*
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 興味があるのだけど、どこに連絡したらいいですか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 関西学院室内合奏団についてのお問い合わせはこちら！
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
