import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import a from '@/files/a.md'

const Index = () => {
  const [mdContent, setMdContent] = useState('')

  return (
    <div>
      <ReactMarkdown
        className='markdown-body'
        children={a}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  )
}

export default Index
