import express from "express";
import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraphqlServer from "./graphql";

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 7000;

    // if json formate me aata hai
    app.use(express.json());

    app.get("/", (req, res) => {
        res.json({ message: "Server is up and running"});
    });
    app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

    app.listen(PORT, () =>
        console.log(`Server started at PORT:${PORT}`)
    );
}


init();
