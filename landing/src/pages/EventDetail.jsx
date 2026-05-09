import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFrappeGetCall } from 'frappe-react-sdk';
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import Layout from '../components/Layout';
import EventRegistrationForm from '../components/sections/EventRegistrationForm';

const EventDetail = () => {
    const { eventId } = useParams();
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    // Fetch event details
    const { data: event, isLoading, error } = useFrappeGetCall(
        'angaliawebapp.angalia_web_app.doctype.angalia_event.angalia_event.get_event_details',
        {
            event_name: eventId
        },
        eventId ? undefined : null, // Don't fetch if no eventId
        {
            revalidateOnFocus: false
        }
    );

    // Debug: Log the event data
    useEffect(() => {
        if (event) {
            console.log('=== EVENT DATA RECEIVED ===');
            console.log('Full event object:', event);
            console.log('Event Date:', event.event_date);
            console.log('Event Date Type:', typeof event.event_date);
            console.log('Event Status:', event.status);
            console.log('Event Title:', event.title);
            console.log('Event Published:', event.published);
            console.log('==========================');
        }
    }, [event]);

    const formatDate = (dateString) => {
        if (!dateString) return 'Date not available';
        
        try {
            // Handle different date formats from ERPNext
            // ERPNext typically returns dates in format: "YYYY-MM-DD HH:MM:SS"
            const date = new Date(dateString);
            
            // Check if date is valid
            if (isNaN(date.getTime())) {
                console.error('Invalid date:', dateString);
                return 'Invalid Date';
            }
            
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error('Error formatting date:', error, dateString);
            return 'Date format error';
        }
    };

    const imageUrl = event?.flyer ? `${window.location.origin}${event.flyer}` : '/assets/images/default-event.jpg';

    if (isLoading) {
        return (
            <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
                <BannerContact />
                <Breadcrumb breadcrumbTitle="Event Details" />
                <section style={{ padding: '100px 0' }}>
                    <div className="container text-center">
                        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-3" style={{ fontSize: '18px', color: '#6c757d' }}>Loading event details...</p>
                    </div>
                </section>
            </Layout>
        );
    }

    if (error || !event) {
        return (
            <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
                <BannerContact />
                <Breadcrumb breadcrumbTitle="Event Not Found" />
                <section style={{ padding: '100px 0' }}>
                    <div className="container text-center">
                        <i className="fa fa-exclamation-triangle" style={{ fontSize: '64px', color: '#dc3545', marginBottom: '20px' }}></i>
                        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Event Not Found</h2>
                        <p style={{ fontSize: '18px', color: '#6c757d', marginBottom: '30px' }}>
                            The event you're looking for doesn't exist or is no longer available.
                        </p>
                        <Link to="/events" className="btn btn-primary btn-lg">
                            <i className="fa fa-arrow-left mr-2"></i>
                            Back to Events
                        </Link>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="homme_5">
            <BannerContact />
              <Breadcrumb breadcrumbTitle={event.title} />
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    {/* Back Button */}
                    <div className="mb-4">
                        <Link to="/events" className="btn btn-outline-secondary">
                            <i className="fa fa-arrow-left mr-2"></i>
                            Back to Events
                        </Link>
                    </div>

                    <div className="row">
                        {/* Event Details */}
                        <div className="col-lg-8">
                            {/* Event Banner */}
                            <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <img
                                    src={imageUrl}
                                    alt={event.title}
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = '/assets/images/default-event.jpg';
                                    }}
                                />
                            </div>

                            {/* Event Title and Info */}
                            <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', padding: '30px' }}>
                                <h1 style={{ color: '#2c3e50', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {event.title}
                                </h1>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className="fa fa-calendar" style={{ fontSize: '24px', color: '#007bff', marginRight: '15px' }}></i>
                                            <div>
                                                <small style={{ color: '#6c757d', display: 'block' }}>Date & Time</small>
                                                <strong style={{ color: '#2c3e50' }}>{formatDate(event.event_date)}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {event.location && (
                                        <div className="col-md-6 mb-3">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <i className="fa fa-map-marker" style={{ fontSize: '24px', color: '#28a745', marginRight: '15px' }}></i>
                                                <div>
                                                    <small style={{ color: '#6c757d', display: 'block' }}>Location</small>
                                                    <strong style={{ color: '#2c3e50' }}>{event.location}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Status Badge */}
                                <div className="mb-3">
                                    <span
                                        className={`badge ${event.status === 'Upcoming' ? 'badge-success' : 'badge-secondary'}`}
                                        style={{ fontSize: '14px', padding: '8px 15px' }}
                                    >
                                        {event.status === 'Upcoming' ? 'Upcoming Event' : 'Past Event'}
                                    </span>
                                </div>

                                {/* Description */}
                                {event.description && (
                                    <div className="mt-4">
                                        <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>About This Event</h4>
                                        <div
                                            style={{ color: '#6c757d', lineHeight: '1.8' }}
                                            dangerouslySetInnerHTML={{ __html: event.description }}
                                        />
                                    </div>
                                )}

                                {/* Highlights */}
                                {event.highlights && event.highlights.length > 0 && (
                                    <div className="mt-4">
                                        <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Event Highlights</h4>
                                        <ul style={{ color: '#6c757d', lineHeight: '2' }}>
                                            {event.highlights.map((highlight, index) => (
                                                <li key={index}>
                                                    <i className="fa fa-check-circle text-success mr-2"></i>
                                                    {highlight.highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Who Should Attend */}
                                {event.who_should_attend && (
                                    <div className="mt-4">
                                        <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Who Should Attend</h4>
                                        <p style={{ color: '#6c757d', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                                            {event.who_should_attend}
                                        </p>
                                    </div>
                                )}

                                {/* Recording Link for Past Events */}
                                {event.status === 'Past' && event.recording_link && (
                                    <div className="mt-4">
                                        <a
                                            href={event.recording_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-success btn-lg btn-block"
                                        >
                                            <i className="fa fa-play-circle mr-2"></i>
                                            Watch Event Recording
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Registration Sidebar */}
                        <div className="col-lg-4">
                            <div className="card shadow-sm" style={{ borderRadius: '10px', padding: '30px', position: 'sticky', top: '100px' }}>
                                {event.status === 'Upcoming' ? (
                                    <>
                                        <h4 style={{ color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>
                                            Register for This Event
                                        </h4>
                                        <p style={{ color: '#6c757d', textAlign: 'center', marginBottom: '20px' }}>
                                            Secure your spot now! Registration is free and takes less than a minute.
                                        </p>

                                        {event.registration_link ? (
                                            <a
                                                href={event.registration_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-lg btn-block"
                                            >
                                                <i className="fa fa-external-link mr-2"></i>
                                                Register Now
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => setShowRegistrationForm(!showRegistrationForm)}
                                                className="btn btn-primary btn-lg btn-block"
                                            >
                                                <i className="fa fa-ticket mr-2"></i>
                                                {showRegistrationForm ? 'Hide Form' : 'Register Now'}
                                            </button>
                                        )}

                                        <div className="mt-4 text-center">
                                            <small style={{ color: '#6c757d' }}>
                                                <i className="fa fa-lock mr-1"></i>
                                                Your information is secure
                                            </small>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h4 style={{ color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>
                                            Event Concluded
                                        </h4>
                                        <p style={{ color: '#6c757d', textAlign: 'center', marginBottom: '20px' }}>
                                            This event has already taken place. Check out our upcoming events!
                                        </p>
                                        <Link to="/events" className="btn btn-outline-primary btn-lg btn-block">
                                            <i className="fa fa-calendar mr-2"></i>
                                            View Upcoming Events
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Registration Form Section */}
                    {showRegistrationForm && event.status === 'Upcoming' && !event.registration_link && (
                        <div className="row mt-5">
                            <div className="col-12">
                                <EventRegistrationForm eventId={eventId} eventTitle={event.title} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default EventDetail;
