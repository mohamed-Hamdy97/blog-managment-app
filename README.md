[BlogApp.postman_collection.json](https://github.com/user-attachments/files/18952622/BlogApp.postman_collection.json)# 📝 Blog Management API

A simple **Node.js & Express** API for managing blog posts with authentication using **JWT & MongoDB**.

---

## 🚀 Features
✅ Create, read, update, and delete (CRUD) blogs  
✅ User authentication with **JWT (JSON Web Tokens)**  
✅ Protected routes (only authenticated users can create/update/delete)  
✅ MongoDB as the database  

---

## 📦 Installation

1️⃣ **Clone the repository**
```sh
git clone https://github.com/yourusername/blog-management-api.git
cd blog-management-api
npm i
npm start

----
before that you just request env file

## for Api docs you cean see attached postman collection
[Uploading BlogApp.postman_collection.json…]({
	"info": {
		"_postman_id": "fc441beb-cd46-4c7e-89b3-57c4d6d3e7e4",
		"name": "BlogApp",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "27536784"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"mohamed\",\n    \"email\": \"test16@test.com\",\n    \"password\": \"12345asd\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{LocalHost}}/api/auth/login",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "signup",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"mohamed\",\n    \"email\": \"test1699@test.com\",\n    \"password\": \"12345asd\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{LocalHost}}/api/auth/signup",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"auth",
								"signup"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Blogs",
			"item": [
				{
					"name": "myBlogs",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{LocalHost}}/api/blogs?category=health",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"blogs"
							],
							"query": [
								{
									"key": "category",
									"value": "health"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "createBlog",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JkMDI1ZDliOTFiNDlmNmEwZTM5NzAiLCJpYXQiOjE3NDA0NDU2NDcsImV4cCI6MTc0MDUzMjA0N30.e89ErP31J43NCsyGl8GDZWLWCSrKU6qTbAcEb9Oifhg",
								"type": "text",
								"disabled": true
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"first blog\",\n    \"content\": \"fi\",\n    \"category\": [\n        \"business\"\n    ],\n    \"owner\":\"67bd025d9b91b49f6a0e3970\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{LocalHost}}/api/blogs",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"blogs"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateBlog",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JkMDI1ZDliOTFiNDlmNmEwZTM5NzAiLCJpYXQiOjE3NDA0NDU2NDcsImV4cCI6MTc0MDUzMjA0N30.e89ErP31J43NCsyGl8GDZWLWCSrKU6qTbAcEb9Oifhg",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"last new blog\",\n    \"content\": \"first  description blog\",\n    \"category\": [\n        \"it\"\n    ],\n    \"owner\": \"67bd025d9b91b49f6a0e3970\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{LocalHost}}/api/blogs/67b12e8065070956b86047c0",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"blogs",
								"67b12e8065070956b86047c0"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteBlog",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "x-auth-token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JkMDI1ZDliOTFiNDlmNmEwZTM5NzAiLCJpYXQiOjE3NDA0NDU2NDcsImV4cCI6MTc0MDUzMjA0N30.e89ErP31J43NCsyGl8GDZWLWCSrKU6qTbAcEb9Oifhg",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{LocalHost}}/api/blogs/65f1234abcde56789f012345",
							"host": [
								"{{LocalHost}}"
							],
							"path": [
								"api",
								"blogs",
								"65f1234abcde56789f012345"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "LocalHost",
			"value": "http://localhost:3000",
			"type": "string"
		}
	]
})
