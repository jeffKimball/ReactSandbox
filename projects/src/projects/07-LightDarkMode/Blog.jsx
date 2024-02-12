import React, { useContext } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context'

const Blog = () => {
  const {theme, changeTheme} = useContext(ThemeContext)
  return (
      <div className="container">
          <Title text={`My Blog With ${theme} Theme`} />
          <span style={{ position: "absolute", top: 10, right: 10 }}>
              <Button
                  text={theme === "dark" ? "Light" : "Dark"}
                  btnClass={theme === "dark" && "btn-light"}
                  onClick={changeTheme}
              />
          </span>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              iure odit ducimus corrupti quam, commodi inventore id ipsum non
              tenetur blanditiis, omnis ad voluptates sapiente reprehenderit sed
              fuga quaerat velit.
          </p>
      </div>
  );
}

export default Blog