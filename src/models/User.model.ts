import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

export type UserDocument = mongoose.Document & {
  email: string;
  password: string;
  profile: {
    name: string;
    gender: string;
  };
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    profile: {
      name: String,
      gender: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function save(next) {
  const user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

export const User = mongoose.model<UserDocument>("User", userSchema);
