"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import {
  updateProfile,
  uploadAvatar,
  deleteAvatar,
  sendEmailVerification,
} from "@/lib/api";
import {
  User,
  Mail,
  Phone,
  Camera,
  Loader2,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Trash2,
  Lock,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, updateUser, refreshUser } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isDeletingAvatar, setIsDeletingAvatar] = useState(false);
  const [isSendingVerification, setIsSendingVerification] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    lastname: user?.lastname || "",
    phone: user?.phone || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await updateProfile(formData);

      if (response.status === "success" && response.data) {
        updateUser(response.data);
        setIsEditing(false);
        setMessage({ type: "success", text: "Profile updated successfully!" });
      } else {
        setMessage({
          type: "error",
          text: response.message || "Failed to update profile.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Please select an image file." });
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setMessage({ type: "error", text: "Image must be less than 2MB." });
      return;
    }

    setIsUploadingAvatar(true);
    setMessage(null);

    try {
      const response = await uploadAvatar(file);

      if (response.status === "success" && response.data) {
        updateUser(response.data);
        setMessage({ type: "success", text: "Avatar updated successfully!" });
      } else {
        setMessage({
          type: "error",
          text: response.message || "Failed to upload avatar.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsUploadingAvatar(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDeleteAvatar = async () => {
    if (!confirm("Are you sure you want to delete your avatar?")) return;

    setIsDeletingAvatar(true);
    setMessage(null);

    try {
      const response = await deleteAvatar();

      if (response.status === "success") {
        await refreshUser();
        setMessage({ type: "success", text: "Avatar deleted successfully!" });
      } else {
        setMessage({
          type: "error",
          text: response.message || "Failed to delete avatar.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsDeletingAvatar(false);
    }
  };

  const handleSendVerification = async () => {
    setIsSendingVerification(true);
    setMessage(null);

    try {
      const response = await sendEmailVerification();

      if (response.status === "success") {
        setMessage({
          type: "success",
          text: "Verification email sent! Please check your inbox.",
        });
      } else {
        setMessage({
          type: "error",
          text: response.message || "Failed to send verification email.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSendingVerification(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      lastname: user?.lastname || "",
      phone: user?.phone || "",
    });
    setIsEditing(false);
  };

  if (!user) return null;

  const isEmailVerified = !!user.email_verified_at;

  return (
    <div className="min-h-[calc(100vh-160px)] px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your account and profile settings
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div
            className={`flex items-center gap-3 p-4 mb-6 rounded-xl ${
              message.type === "success"
                ? "bg-primary/10 border border-primary/20 text-primary"
                : "bg-destructive/10 border border-destructive/20 text-destructive"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 shrink-0" />
            )}
            <span className="text-sm">{message.text}</span>
          </div>
        )}

        {/* Email Verification Warning */}
        {!isEmailVerified && (
          <div className="flex items-start gap-4 p-4 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-amber-700">
                Email not verified
              </p>
              <p className="text-sm text-amber-600 mt-1">
                Please verify your email address to access all features.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSendVerification}
              disabled={isSendingVerification}
              className="shrink-0 border-amber-500/30 text-amber-700 hover:bg-amber-500/10"
            >
              {isSendingVerification ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Verification"
              )}
            </Button>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Avatar Section */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={`${user.name} ${user.lastname}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>

                {/* Upload Button Overlay */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploadingAvatar}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isUploadingAvatar ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Camera className="h-4 w-4" />
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">
                  {user.name} {user.lastname}
                </h2>
                <p className="text-muted-foreground">{user.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  {isEmailVerified ? (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-amber-500/10 text-amber-600 rounded-full">
                      <AlertTriangle className="h-3 w-3" />
                      Unverified
                    </span>
                  )}
                </div>
              </div>

              {/* Delete Avatar Button */}
              {user.avatar && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDeleteAvatar}
                  disabled={isDeletingAvatar}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  {isDeletingAvatar ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Profile Information
              </h3>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              )}
            </div>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="h-11 px-4 flex items-center bg-muted rounded-xl text-foreground">
                      {user.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="h-11 px-4 flex items-center bg-muted rounded-xl text-foreground">
                      {user.lastname}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email
                </label>
                <p className="h-11 px-4 flex items-center bg-muted rounded-xl text-foreground">
                  {user.email}
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full h-11 px-4 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                ) : (
                  <p className="h-11 px-4 flex items-center bg-muted rounded-xl text-foreground">
                    {user.phone || "Not set"}
                  </p>
                )}
              </div>

              {/* Member Since */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  Member Since
                </label>
                <p className="h-11 px-4 flex items-center bg-muted rounded-xl text-foreground">
                  {new Date(user.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Edit Actions */}
              {isEditing && (
                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isSaving}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="glow"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Password</h4>
                  <p className="text-sm text-muted-foreground">
                    Change your account password
                  </p>
                </div>
              </div>
              <Link href="/dashboard/password">
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
