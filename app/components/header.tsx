import type { FC } from 'react'
import React, { useState } from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'

export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}

const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-3 bg-blue-500">
      {isMobile
        ? (
          <div
            className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onShowSideBar?.()}
          >
            <Bars3Icon className="h-4 w-4 text-gray-500" />
          </div>
        )
        : <div></div>}
      <div className='flex items-center space-x-2'>
        <img src="/images/new_logo.png" alt="Dify Logo" className="h-8" />
        <div className="text-sm text-white font-bold">{title}</div>
      </div>
      {isMobile
        ? (
          <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onCreateNewChat?.()}
          >
            <PencilSquareIcon className="h-4 w-4 text-gray-500" />
          </div>
        )
        : (
          <button onClick={toggleMessage} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {showMessage ? 'メッセージを隠す' : 'メッセージを表示'}
          </button>
        )}

      {/* メッセージ表示領域 */}
      {showMessage && (
        <div className="absolute top-12 right-0 bg-white p-4 border rounded shadow-md">
          ここにメッセージを表示します。
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)