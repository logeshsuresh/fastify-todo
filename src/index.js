const fastify = require("fastify")({
    logger: true
});

const PORT = 3000;

// Application lifecycle -> `onReady` Acts when app is ready to start instance
fastify.addHook("onReady", function listener(done) {
    console.log("Server starting up.....READY TO TAKE REQUESTS");
    done();
});

// Application lifecycle -> `onClose` Acts when app is stopping
fastify.addHook("onClose", function listener(_) {
    console.log("Server shutting down....");
});

async function start() {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`Server running on PORT: ${PORT}`);
    } catch (error) {   
        fastify.close();
        console.log(error);
        process.exit(1);
    }
}

start();