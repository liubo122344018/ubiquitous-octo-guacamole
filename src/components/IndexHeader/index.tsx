import React, { useRef, useEffect, useState } from 'react'
import { Input, Popover } from 'antd'
import Icon from '../Icon/indedx.tsx'
import './index.scss';
function IndexHeader() {
    const [isShowIcon, setIsShowIcon] = useState(false);
    const [iconType, setIconType] = useState(true);
    return (
        <div className='header-content'>
            <span className='left-bar'>
                <Icon type='icon-cangchucangku' />
                <span className='group-name'>码云企业版3.0演示系统</span>
                <Popover
                    visible={true}
                    content={()=>(
                        <div>124</div>
                    )}
                    getPopupContainer={()=>document.getElementById('switch-group') }
                >
                    <span
                        className='switch-group'
                        id='switch-group'
                        onMouseEnter={() => setIsShowIcon(true)}
                        onMouseLeave={() => { setIsShowIcon(false); setIconType(true) }}
                        onClick={() => { setIconType(prev => !prev) }}
                    >
                        {isShowIcon &&
                            <Icon
                                type={iconType ? 'icon-arrow-down-bold' : 'icon-arrow-up-bold'}
                            />
                        }
                    </span>
                </Popover>

            </span>

            {/* <span>售后 QQ 群：248386765</span>
            <Input placeholder='搜索...'/> */}
        </div>
    )
}
export default IndexHeader