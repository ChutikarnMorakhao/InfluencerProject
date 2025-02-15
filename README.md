MyInfluencer Project

| Method | Path | Authenticate | Params  | Query | Body | 
|:--     |:--   |:--           |:--      |:--    |:--   |
 /auth    
| POST   | /auth/admin/register| - | - | - | {username, email, password} |  
| POST |/auth/admin/login | - | - | - | {email, password}|
| GET | /auth/admin/me| Y | - | -| - | -|
| POST   | /auth/user/register| - | - | - | {firstname, lastname, username, email, password, phoneNumber,profileImage,gender} |  
| POST |/auth/user/login | - | - | - | {username or email, password}|
| GET | /auth/user/me| Y | - | -| - | -|
/Social media 
| POST | /social | Y | - | - | {socialMediaName, URL }
| GET  | /social | Y| - | - | - |
| PATCH  | /social | Y| :id | - | {socialMediaName, URL } |
| DELETE  | /social | Y| :id | - | - |
/Admin 
| GET |/admin/alluser | Y| - | - | - |
|PATCH |/admin | Y | :userId | - | {status} |
/User
|PATCH|/user | Y | - | - | {firstname, lastname, username, email, password, phoneNumber,profileImage,gender}|
/Post 
|POST|/post| Y|-|-|{userId, catagoryId, title, productBrand, reviewScore, reviewDetail, qualityDetail, designDetail, color, size, price, moreDetail, affiliateLink}|
|GET |/post/allpost| - |-|-|-|
|GET |/post| - |:postId|-|-|
|GET |/post/me| Y |-|-|-|
|GET |/post| - |-|category, title, productBrand, influName|-|
|PATCH|/post/me| Y|-|-|{userId, catagoryId, title, productBrand, reviewScore, reviewDetail, qualityDetail, designDetail, color, size, price, moreDetail, affiliateLink}|
|DELETE|/post|Y|:postId|-|-| 
/Category
|GET|/category|-|-|-|-|
|PATCH|/category|Y|-|-|{categoryName}|
/PostImage 
|POST|/postImage|Y|-|-|{postId, urlImage}|
|GET|/postImage|-|:postId|-|-|
|PATCH|/postImage|Y|:postImageId|-|{postId, urlImage}|
/Favourite 
|POST|/favourite|Y|-|-|{postId, UserId}|
|GET|/favourite|Y|-|-|-|
|PATCH|/favourite|Y|:favId|-|{postId, UserId}|
|DELETE|/favourite|Y|:favId|-|-|
/Comment
|POST|/post/comment|Y|:postId|-|{text, userId}|
|GET|/post/comment|-|:postId|-|-|
|PATCH|/post/comment|Y|:postId:commentId|-|{text,userId}|
|DELETE|/post/comment|Y|:postId:commentId|-|-|
























