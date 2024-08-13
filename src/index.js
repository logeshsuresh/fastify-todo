const fastify = require("fastify")({
    logger: true
});

const PORT = 3000;

async function start() {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`Server running on PORT: ${PORT}`);
    } catch (error) {   
        console.log(error);
        process.exit(1);
    }
}

start();