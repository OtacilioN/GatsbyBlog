import React from "react"
import { Link } from "gatsby"

const PostBrief = props => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to="/slug/"
    >
      <section
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          boxShadow: "0px 4px 5px 3px rgba(0,0,0,0.58)",
          marginTop: 16,
          padding: 16,
        }}
      >
        <div>
          <h1>Prensa francesa: Conheça o método e suas caraterísticas</h1>
        </div>
        <div>
          <h6>
            O que muda no sabor? Veja como preparar um bom café na prensa
            francesa
          </h6>
          <p>16 de março de 2020 - 12 min de leitura</p>
        </div>
      </section>
    </Link>
  )
}
export default PostBrief
