new Vue({

    el: '#app',

    data() {
        return {

            /**
             * About block content.
             */
            about: {
                header: 'Виды работ',
                works: [
                    'Дизайн и изготовление одежды',
                    'Деликатная подгонка по фигуре',
                    'Ремонт меховых и кожаных изделий',
                    'Изготовление домашнего текстиля',
                    'Изготовление карнавальных и танцевальных костюмов',
                    'Пошив вечерних, выпускных платьев и повседневной одежды',
                    'Изготовление скатертей, салфеток, штор для кафе и ресторанов',
                ],
            },

            /**
             * Contacts block content.
             */
            contacts: {
                user: {
                    header: 'Контакты',
                    name: 'Ирина Александровна',
                    phones: [
                        '+7 (999) 817 20 16',
                        '+7 (909) 655 73 22',
                    ],
                },
                address: {
                    header: 'Адрес',
                    location: 'Россия, Рузский район, п. Нестерово, д. 97',
                },
            },

            /**
             * Photo gallery content.
             */
            gallery: {
                header: 'Галерея',
                images: this.getImages(),
            },

        }
    },

    computed: {

        /**
         * Header block content.
         *
         * @returns {object}
         */
        navbar: function () {
            return [
                {
                    id: 'about',
                    title: this.about.header,
                },
                {
                    id: 'contacts',
                    title: this.contacts.user.header,
                },
                {
                    id: 'address',
                    title: this.contacts.address.header,
                },
                {
                    id: 'gallery',
                    title: this.gallery.header,
                },
            ]
        },

    },

    methods: {

        /**
         * Return links array on gallery images.
         *
         * @returns {array}
         */
        getImages: function () {

            const images = [];

            for (let i = 1; i < 25; i++) {
                images.push('/public/images/gallery/' + i + '.jpg');
            }

            return images;
        },

        /**
         * Click on image handler.
         *
         * @param index
         */
        modalImage(index) {

            $('div.carousel-item#' + index).addClass('active');
            $('#modal').modal('show');

        },

    },

});

$(document).ready(function () {

    $('#modal').on('hide.bs.modal', function (e) {
        $('div.carousel-inner > div.active').removeClass('active');
    });

    $('iframe').css('width', window.innerWidth);

});