import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Header = () => {
  return (
    <nav>
      <div className="hola">
        <img
          className="Logo"
          src="https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/301517074_1243199629764014_8502013612090632319_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFI9eC5ak4rYpEa72W33hbxmCZ2B2XD-mSYJnYHZcP6ZEPENZe8pjTTLQtrQJy13l13f2YD5Ukcg-_dcNbeOYrE&_nc_ohc=BBhISsTPznwAX9YEBw7&_nc_ht=scontent.fbga2-1.fna&oh=00_AfDqAOjGiBYpQl_KqKUfR_ZL1gkE7gv7OCTBizIUQUNtQw&oe=640ADD4F"
          width={150}
          height="200"
        ></img>

        <a>
          {" "}
          <p>Bienvenido a </p>
          <h1>Roa Style</h1>{" "}
          <a>
            Hemos creado este espacio pensando en ti. Aquí podras visualizar las
            citas programadas
          </a>
        </a>

        <br>
        </br>
        <img
          className="Logo"
          src="https://scontent.fctg1-3.fna.fbcdn.net/v/t1.6435-9/171626291_918209938929653_1038153792477665342_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtM5ojiUUJ0VuTstyplRdyZmfTd7iSyvlmZ9N3uJLK-b4Xd5-BtTzoiw0gyILDhmyBSTS7tsalzumiSdI5psul&_nc_ohc=513S_qaLOWkAX91d5r5&_nc_ht=scontent.fctg1-3.fna&oh=00_AfAzGTKShbPU8WE72LLKHh701PKqx40M4JNRrSzUrn1TVg&oe=642C9C8B
          "
          width={150}
          height="200"
        ></img>
      </div>

      <div className="header">
      
      <a> Agendate con nosotros </a>
      <p>Es momento de un cambio</p>
      </div>

    </nav>
  );
};
