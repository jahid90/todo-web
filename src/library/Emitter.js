import EventEmitter from 'event-emitter3';

const eventEmitter = new EventEmitter();

const Emitter = {
    on: (event, fn) => {

        console.log(`[${event}] - listener attached.`);

        eventEmitter.on(event, fn);
    },
    once: (event, fn) => {

        console.log(`[${event}] - one-time listened attached.`);

        eventEmitter.once(event, fn);
    },
    off: (event, fn) => {

        console.log(`[${event}] - listener detached.`);

        eventEmitter.off(event, fn);
    },
    emit: (event, payload) => {

        console.log(`[${event}] - payload: ${JSON.stringify(payload, null, 2)}`);

        eventEmitter.emit(event, payload);
    }
}

Object.freeze(Emitter);

export default Emitter;
