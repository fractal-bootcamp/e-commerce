// import admin from "firebase-admin";
// import { serviceAccount } from "../../firebase/serviceAccount";
// import { describe, it, expect } from "vitest";
// import { getToken } from "../../firebase/getToken";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
//   });
// }

// describe("getToken", () => {
//   it("should return a custom token", async () => {
//     const token = await getToken();
//     const mockedToken = await admin.auth().createCustomToken("user123");
//     expect(token).toBe(mockedToken);
//   });
// });

import { describe, it, expect, vi } from "vitest";
import admin from "firebase-admin";
import { getIdToken } from "../../firebase/getIdToken";

// Completely replace the implementation
vi.mock("../../firebase/serviceAccount", () => ({
  serviceAccount: {},
}));

vi.mock("firebase-admin", async (importOriginal) => {
  const actual = await importOriginal<typeof admin>();
  return {
    ...actual,
    initializeApp: vi.fn(),
    apps: [],
    auth: () => ({
      createCustomToken: vi.fn().mockResolvedValue("mocked-custom-token"),
    }),
    credential: {
      cert: vi.fn(),
    },
  };
});

describe("getToken", () => {
  it("should return a custom token", async () => {
    const token = await getIdToken();
    expect(token).toBe("mocked-custom-token");
  });
});
