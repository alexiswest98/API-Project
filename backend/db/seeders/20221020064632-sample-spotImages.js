'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/353/422657353_5_0.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/353/422657353_1_0.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/353/422657353_14_1.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/353/422657353_28_1.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://ssl.cdn-redfin.com/photo/8/bigphoto/369/ML81901369_3_G.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/282/421535282_17_0.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/282/421535282_7_0.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/839/422702839_0.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/839/422702839_1_0.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/839/422702839_4_0.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/839/422702839_55_0.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/176/422701176_2.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/176/422701176_5_2.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/176/422701176_13_2.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/176/422701176_31_2.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://ssl.cdn-redfin.com/system_files/media/762646_JPG/item_45.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://ssl.cdn-redfin.com/system_files/media/762646_JPG/item_7.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://ssl.cdn-redfin.com/system_files/media/762646_JPG/item_29.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://ssl.cdn-redfin.com/system_files/media/762646_JPG/item_44.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/064/422702064_0.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/064/422702064_3_0.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/064/422702064_15_0.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/064/422702064_22_0.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/422698224_1_0.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/422698224_0.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/422698224_7_0.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/422698224_14_0.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/422698224_31_0.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/232/422695232_1_3.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/421576224_1_4.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/421576224_5_5.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/224/421576224_15_5.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/659/422701659_1.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/659/422701659_1_4.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/659/422701659_11_4.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/659/422701659_14_4.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/560/422696560_1.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/560/422696560_1_1.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/560/422696560_2_1.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/560/422696560_11_0.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/560/422696560_20_0.jpg',
        preview: true,
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     const Op = Sequelize.Op;
     await queryInterface.bulkDelete('SpotImages', {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }, {});
  }
};
