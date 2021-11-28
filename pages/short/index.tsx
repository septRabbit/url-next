import React, { useRef } from 'react';
import { useRouter } from 'next/router'
import { QRCode } from 'react-qr-svg';
import clsx from 'clsx';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { useToast } from '../../components/toast';
import { v4 as uuid } from 'uuid'
import { sendData } from 'next/dist/server/api-utils';

/* global ClipboardItem */
function copyToClipboard(text: string) {
  const type = 'text/plain';

  async function get(): Promise<string | Blob> {
    return new Blob([text], { type });
  }

  const data = [new ClipboardItem({ [type]: get() })];

  return navigator.clipboard.write(data);
}

Result.getInitialProps = ({sendData}) => {
  return sendData
}

function Result(sendData) {
  
  return (
    <div>{sendData}</div>
  )

  // const shortURL = `${window.location.origin}/${location.state.data}`;
  // const setToast = useToast();
  // const myInput = useRef<HTMLInputElement>(null);


  // const onClick = () => {
  //   if (!myInput.current) return;

  //   myInput.current.select();
  //   copyToClipboard(shortURL);
  //   setToast([{ id: uuid() , message: 'Copy To Clipboard' }]);
  // };

  // if (!location.state) {
  //   router.push({pathname:'/'});
  // }

  // return (
  //   <div>
  //     <main
  //       className={clsx(
  //         'px-6 md:px-20 grid max-w-screen-xl mx-auto',
  //         'md:grid-cols-2 place-content-center gap-10 md:gap-20',
  //       )}
  //     >
  //       <section
  //         className={clsx(
  //           'my-auto text-center space-y-8 lg:space-y-8',
  //           'text-blue-500 lg:text-left',
  //         )}
  //       >
  //         <h1 className='text-2xl font-bold lg:text-4xl'>Best URL Shortener</h1>
  //         <p className='text-base'>Easy Link Shortening</p>
  //       </section>

  //       <section className='flex flex-col items-center justify-center space-y-8 md:mx-1'>
  //         <div className='flex flex-row items-center'>
  //           <input
  //             readOnly
  //             className='px-3 py-2 text-gray-600 bg-white border border-blue-400 rounded-lg w-80'
  //             value={shortURL}
  //             ref={myInput}
  //           />

  //           <button type='button' onClick={onClick} className='ml-2 bg-white py-1.5 px-3 rounded-lg'>
  //             <i className='text-xl text-gray-700 far fa-copy' />
  //           </button>
  //         </div>

  //         <QRCode
  //           className='p-2 border-2 border-blue-300 rounded-md'
  //           bgColor='#FFFFFF'
  //           fgColor='#000000'
  //           level='Q'
  //           style={{ width: 220 }}
  //           value={shortURL}
  //         />
  //         <div className='flex flex-row w-4/5 justify-evenly lg:w-3/5'>
  //           <FacebookShareButton className='flex items-center' url={shortURL}>
  //             <FacebookIcon size={50} round />
  //           </FacebookShareButton>
  //           <LineShareButton className='flex items-center' url={shortURL}>
  //             <LineIcon size={50} round />
  //           </LineShareButton>
  //           <TwitterShareButton className='flex items-center' url={shortURL}>
  //             <TwitterIcon size={50} round />
  //           </TwitterShareButton>
  //           <WhatsappShareButton className='flex items-center' url={shortURL}>
  //             <WhatsappIcon size={50} round />
  //           </WhatsappShareButton>
  //         </div>
  //         <button
  //           type='button'
  //           onClick={() => router.push({pathname:'/'})}
  //           className='p-2 text-blue-400 border-2 border-blue-400 rounded-xl'
  //         >
  //           Shorten a new URL
  //         </button>
  //       </section>
  //     </main>
    // </div>
  // );
}

export default Result;
