# Blog API with Express and Mongoose

## Description
This project is a blog application API built using Express.js and Mongoose. The API provides functionalities for creating posts, adding comments, liking/unliking posts, and retrieving all posts. This backend service handles all CRUD operations and interactions with the MongoDB database.

## Technologies Used
- **Express.js:** Used for building the backend server and handling API routes.
- **MongoDB:** Used for storing blog posts, comments, and likes in a NoSQL database.
- **Mongoose:** Used for object data modeling (ODM) to interact with MongoDB.

## Features
- **Create Post:** Allows users to create new blog posts.
- **Add Comment:** Enables users to add comments to posts.
- **Like/Unlike Post:** Allows users to like or unlike blog posts.
- **Get All Posts:** Retrieves and displays a list of all blog posts.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/blog-api-express-mongoose.git
   cd blog-api-express-mongoose

# Usage
# The following API endpoints are available:

# Create Post
 --URL: /createpost
--Method: POST
--Description: Creates a new blog post.
--Body Parameters:
--title (string): The title of the post.
--content (string): The content of the post.

# Add Comment
--URL: /comments/create
--Method: POST
--Description: Adds a new comment to a post.
--Body Parameters:
--postId (string): The ID of the post.
--comment (string): The comment text.

# Like Post
-- URL: /dummyroute
-- Method: POST
-- Description: Likes a post.
-- Body Parameters:
-- postId (string): The ID of the post.

## Unlike Post
-- URL: /unlikepost
-- Method: DELETE
-- Description: Unlikes a post.
-- Body Parameters:
-- postId (string): The ID of the post.

## Get All Posts

-- URL: /getallpost
-- Method: GET
-- Description: Retrieves all blog posts.

## Contributing
Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or feedback, please contact me at ankitpandey62042@gmail.com.
