
const { createApp } = Vue

createApp({

  data() {

    return {

      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              time: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              time: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              time: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              time: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              time: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              time: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              time: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              time: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              time: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              time: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              time: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              time: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              time: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Stefania',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              time: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              time: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              time: '15:51',
              message: 'OK!!',
              status: 'received'
            },


          ],


        }

      ],

      chatContactIndex: 0,

      selectedContactIndex: -1,

      newMessage: '',

      newResponse: '',

    }

  },

  methods: {

    changeContactIndex(contactIndex) {

      this.chatContactIndex = contactIndex;
      this.selectedContactIndex = contactIndex;

    },

    addMessage(index) {

      if (this.newMessage !== '') {

        let date = new Date();
        let timeOptions = { hour: 'numeric', minute: 'numeric' };
        let time = date.toLocaleTimeString('it-IT', timeOptions);

        let newMessageObj = {

          time: time,
          message: this.newMessage,
          status: 'sent'

        };

        this.contacts[index].messages.push(newMessageObj);
        this.newMessage = '';

        if (this.newMessage === '') {

          setTimeout(() => {

            newMessageObj = {

              time: time,
              message: 'Ok!',
              status: 'received'

            }

            this.contacts[index].messages.push(newMessageObj);
            this.newMessage = '';

          }, 2000);

          

        }
        
      }

    },

  }

}).mount('#app')