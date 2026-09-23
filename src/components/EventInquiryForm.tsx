"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function EventInquiryForm() {
  const content = siteContent.home.booking;
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch(content.endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Formspree returned ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="booking-form"
      action={content.endpoint}
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <fieldset disabled={isSubmitting}>
        <legend className="sr-only">Event inquiry details</legend>
        <div className="form-grid">
          {content.fields.map((field) => (
            <label key={field.id} htmlFor={field.id}>
              <span>
                {field.label}
                <small>
                  {field.required
                    ? content.fieldStatus.required
                    : content.fieldStatus.optional}
                </small>
              </span>
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder || undefined}
                autoComplete={field.autoComplete}
                required={field.required}
                min={"min" in field ? field.min : undefined}
                inputMode={"inputMode" in field ? field.inputMode : undefined}
              />
            </label>
          ))}
        </div>
        <label htmlFor={content.message.id}>
          <span>
            {content.message.label}
            <small>{content.fieldStatus.required}</small>
          </span>
          <textarea
            id={content.message.id}
            name={content.message.name}
            placeholder={content.message.placeholder}
            rows={5}
            required={content.message.required}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? content.sendingLabel : content.buttonLabel}
        </button>
      </fieldset>

      <div
        className={`form-status form-status-${status}`}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        {status === "success" ? <p>{content.successMessage}</p> : null}
        {status === "error" ? (
          <p>
            {content.errorMessage}{" "}
            <a href={`mailto:${content.fallbackEmail}`}>{content.fallbackEmail}</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}
