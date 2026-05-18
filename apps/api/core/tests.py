from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase


class HealthCheckTests(APITestCase):
    def test_healthcheck_returns_expected_payload(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.json(),
            {"name": "Lumina System", "status": "ok"},
        )


class AuthTokenTests(APITestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="lumina",
            password="lumina-pass-123",
        )

    def test_can_obtain_jwt_token_pair(self):
        response = self.client.post(
            "/api/token/",
            {"username": self.user.username, "password": "lumina-pass-123"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.json())
        self.assertIn("refresh", response.json())
