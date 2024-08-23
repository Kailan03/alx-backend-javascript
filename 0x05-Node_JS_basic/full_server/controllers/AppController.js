    /**
     * Handles the request to get the homepage.
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
