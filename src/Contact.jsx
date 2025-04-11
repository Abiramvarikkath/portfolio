import React from 'react'

function Contact() {
  return (
    <div id='Contact'  className="scroll-smooth">
        <div  className='text-center justify-center'>
             <h1 className=' font-bold mt-12 text-4xl'>Contact</h1>
             <h2 className='mt-12'>Feel free to reach out to me on the following platforms or via email:</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 mt-1">
          {/* LinkedIn */}
          <a
            href=""
            className="flex items-center space-x-2 text-blue-500 "
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86v5.5h-3v-10h2.88v1.38h.04c.4-.76 1.37-1.55 2.83-1.55 3.02 0 3.58 1.98 3.58 4.56v5.61z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href=""
            className="flex items-center space-x-2 text-blue-500 "
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577v-2.173c-3.338.724-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.755-1.333-1.755-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.805 1.304 3.49.997.107-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.922.43.37.813 1.103.813 2.22v3.293c0 .323.192.694.8.576 4.765-1.585 8.2-6.082 8.2-11.384 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Email */}
          <a
            href=""
            className="flex items-center space-x-2 text-blue-500"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.713-8.713h23.426l-11.713 8.713zm-12-9.713v18h24v-18h-24z" />
            </svg>
            <span>Email: abhiramv730@email.com</span>
          </a>
        </div>
    </div>
  )
}

export default Contact
