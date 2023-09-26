# GMS API Documentations

**Root Link** `https://garden-management.onrender.com/`

## APIs
| Type | Endpoint | Parameters | Description |
|------|----------|------------|-------------|
| POST | api/v1/auth/register | name, email, password | Client Registration |
| POST | /api/v1/client/login | email, password | Client Login |
| POST | /api/v1/admin/login | email, password | Admin Login |
| GET | api/v1/admin/users | - | Admin Get All Users |
| POST | api/v1/admin/landscape-designs | title, description, link, image | Admin Add Landscape Designs |
| POST | api/v1/admin/add-products | title, description, link, image | Admin Add Products |
| POST | /api/v1/admin/services | title, type, description, link, image | Admin Add Services |
| POST | /api/v1/admin/projects | title, type, description, link, image | Admin Adding Projects |
| POST | /api/v1/admin/plants | title, type, description, link, image | Admin Adding Plants |