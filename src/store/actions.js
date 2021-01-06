let websocket;
let controller = {};

export default {
    connectWebsocket({dispatch, commit}) {
        websocket = new WebSocket("ws://localhost:9000/websocket");
        console.info('websocket connecting...');

        websocket.onopen = () => {
            console.info('Connected to Websocket');
            websocket.send(JSON.stringify({"client":"client"}));
        }

        websocket.onmessage = message => dispatch('websocketOnMessage', message);

        websocket.onerror = function (error) {
            console.log('Error in Websocket Occured: ' + error);
        };

        websocket.onclose = () => {
            setTimeout(() => {
                dispatch('connectWebsocket');
                setTimeout( {},500);
            }, 2000);
        }
        commit('connectToSocket', websocket)

    },

    websocketOnMessage({commit}, message) {
        controller = JSON.parse(message.data);
        if ("client_id" in controller) {
            commit('client_id', controller.client_id);
            console.info('Websocket got id: ' + controller.client_id);
        } else {
            commit('html', controller.html);
            commit('playerActions', controller.playerActions);
            commit('playerBuys', controller.playerBuys);
            commit('playerMoney', controller.playerMoney);
            commit('controllerPhase', controller.controllerPhase);
            commit('turn', controller.turn);
            commit('playerName', controller.playerName);
            commit('playerHand', controller.playerHand);
            commit('playingDecks', controller.playingDecks);
            commit('playerTurn', controller.playerTurn);
        }
    }
}