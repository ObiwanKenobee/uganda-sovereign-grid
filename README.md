
# Uganda Sovereign Tech Grid (USTG)

A secure, extensible, offline-capable platform for sovereign tech infrastructure, empowering Ugandan citizens with digital services across education, agriculture, healthcare, finance, and civic engagement.

## Core Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vite, React + TypeScript, TailwindCSS |
| Backend | Node.js + TypeScript, tRPC, Fastify, Prisma ORM |
| Database | PostgreSQL (cloud-local hybrid), Redis (queue/cache) |
| Auth & Access | Clerk/Auth.js, OTP via USSD/Email, Role-based ACL |
| Infra | Docker, Kubernetes, Terraform (optional for cloud), NGINX |
| Offline/Low-bandwidth | Service Workers, PWA, SQLite sync adapters |
| Deployment | Fly.io / Railway (urban), EdgeX LocalMesh (rural) |
| Mobile | Expo (React Native) with native BLE/Wi-Fi mesh bridges |

## Key Modules

- **EduGrid**: Digital learning platform with offline capabilities
- **AgroGrid**: AI-powered agriculture advisory and support
- **HealthPods**: Rural health diagnostics and AI-assisted care
- **Finance**: Digital financial services and eUGX subsidy distribution
- **CivicCore**: Digital rights ledger and citizen engagement platform

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

Copyright © 2025 Uganda Sovereign Tech Grid. All rights reserved.

