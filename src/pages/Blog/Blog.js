import React from "react";
import useTitle from "../../hook/useTitle";

export default function Blog() {
  useTitle("Blogs");
  return (
    <div className="p-16 ">
      <h1 className="text-5xl text-center mb-10">Blog</h1>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className=" text-xl font-medium">
          1. Difference between sql and nosql?
        </div>
        <div className="">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL. SQL databases
            defines and manipulates data based structured query language (SQL).
            Seeing from a side this language is extremely powerful. SQL is one
            of the most versatile and widely-used options available which makes
            it a safe choice especially for great complex queries. A NoSQL
            database has dynamic schema for unstructured data. Data is stored in
            many ways which means it can be document-oriented, column-oriented,
            graph-based or organized as a KeyValue store. Great support is
            available for all SQL database from their vendors. Also a lot of
            independent consultations are there who can help you with SQL
            database for a very large scale deployments but for some NoSQL
            database you still have to rely on community support and only
            limited outside experts are available for setting up and deploying
            your large scale NoSQL deployments.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          2. What Is JWT? How Does it Work?
        </div>
        <div className="">
          <p>
            For beginning developers, JSON stands for JavaScript Object Notation
            and is a text-based format for transmitting data across web
            applications. It stores information in an easy-to-access manner,
            both for developers and computers. It can be used as a data format
            by any programming language and is quickly becoming the preferred
            syntax for APIs, surpassing XML.
            <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          3. What is the difference between javascript and NodeJS?
        </div>
        <div className="">
          <p>
            Javascript is a prototype-based, single-threaded programming
            language (I’m simplifying it a lot, there’s so much more to
            Javascript, however for the sake of this TLDR, know it’s a
            programming language). Javascript runtime is an environment where
            Javascript source code executes within. Javascript engines fuel
            Javascript runtime environments, these engines are also now known as
            ECMAScript engines. JS Engines are responsible for parsing and
            executing source code.
            <br />
            NodeJS is an open-source, runtime environment, which uses Chrome’s
            V8 Engine, and executes Javascript code outside of a web browser.
            NodeJS provides the ability to develop server-side Javascript
            programs. Developers can interact with files hosted on the server,
            interact with databases, collect form data, and more.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="">
          <p>
            As we all know, In node.js we run JavaScript and JavaScript language
            don't have a concept of multiple threads then how do we achieve
            that? I am going to tell you how node.js(single threaded) handles
            multiple requests. When a client sends a request to the node server,
            the server further sends that request to other server and waits for
            the response and in the meantime, if there comes another request
            then the client have to wait for some time(seconds). Node.js is a
            single threaded application that is it can only accept requests.
            Node.js can handle multiple requests but it will not wait for other
            server to respond. Therefore single thread will not be blocked for
            single client.
          </p>
        </div>
      </div>
    </div>
  );
}
