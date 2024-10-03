import React from 'react'

function Header() {
  return (
    <div>
        <div className='top-header'>
            <div className='container flex'>
                <p></p>
                <select>
                <option value="kg">KGZ</option>
                <option value="en">END</option>
                <option value="ru">RUS</option>
                </select>
            </div>
        </div>
        <header className='header container'>
            <div className='header-left'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Sing up</li>
                </ul>
            </div>
            <div className=''></div>
        </header>
    </div>

  )
}

export default Header
